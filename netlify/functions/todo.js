exports.handler = async function(event, context) {
   console.log(event);
   return {status: 200, todo: "Hello world!"};
}