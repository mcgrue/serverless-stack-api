export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;
    try {
      // Run the Lambda
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      body = { error: e.message, event, 'context' : context };

      if(event.requestContext) {
        body.requestContext = JSON.stringify(event.requestContext);

        if(event.requestContext.identity) {
          body.identity = JSON.stringify(event.requestContext.identity);
        }

        if(event.requestContext.authorizer) {
          body.authorizer = JSON.stringify(event.requestContext.authorizer);
        } else {
          body.authorizer = 'null';
        }
      }

      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
};
