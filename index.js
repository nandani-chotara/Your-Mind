const Alexa = require('ask-sdk-core');


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    console.log("LaunchRequestHandler");
    // Our skill will receive a LaunchRequest when the user invokes the skill
    // with the  invocation name, but does not provide any utterance
    // mapping to an intent.
    // For Example, "Open starter hacks"
    const speakOutput = 'welcome to, your mind';

    // The response builder contains is an object that handles generating the
    // JSON response that your skill returns.
    return handlerInput.responseBuilder
      .speak(speakOutput) // The text passed to speak, is what Alexa will say.
      .getResponse();
  },
};



const PanicAttackHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PanicAttackIntent';
  },
  handle(handlerInput) {
    console.log("PanicAttackHandler");

    const speakOutput = 'Okay! we can go through this together. name five things you can see around you. focus on them and describe them. take a deep breadth and say i am okay when you have finished.';

    // The response builder contains is an object that handles generating the
    // JSON response that your skill returns.
    return handlerInput.responseBuilder
      .speak(speakOutput) // The text passed to speak, is what Alexa will say.
      .getResponse();
  },
};

const OkayOneHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'OkayOneIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'okay! thats  great!  name four things you can feel, feel the ground underneath you or the wind on your skin. Take a deep breath and Say i am okay when you have finished.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const NotOkayOneHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'NotOkayOneIntent');
        
  },
  handle(handlerInput) {
    const speakOutput = 'no problem, lets try it again';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};




const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(error.trace);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    
    LaunchRequestHandler,
    PanicAttackHandler,
    OkayOneHandler,
    NotOkayOneHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();



