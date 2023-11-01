// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_credits_v1_credits_service_pb = require('../../../services/credits/v1/credits_service_pb.js');

function serialize_com_qapp_hermes_CreditStatusResponse(arg) {
  if (!(arg instanceof services_credits_v1_credits_service_pb.CreditStatusResponse)) {
    throw new Error('Expected argument of type com.qapp.hermes.CreditStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_hermes_CreditStatusResponse(buffer_arg) {
  return services_credits_v1_credits_service_pb.CreditStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_hermes_CreditsOperationResponse(arg) {
  if (!(arg instanceof services_credits_v1_credits_service_pb.CreditsOperationResponse)) {
    throw new Error('Expected argument of type com.qapp.hermes.CreditsOperationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_hermes_CreditsOperationResponse(buffer_arg) {
  return services_credits_v1_credits_service_pb.CreditsOperationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_hermes_GetCreditsRequest(arg) {
  if (!(arg instanceof services_credits_v1_credits_service_pb.GetCreditsRequest)) {
    throw new Error('Expected argument of type com.qapp.hermes.GetCreditsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_hermes_GetCreditsRequest(buffer_arg) {
  return services_credits_v1_credits_service_pb.GetCreditsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_hermes_PurchaseRequest(arg) {
  if (!(arg instanceof services_credits_v1_credits_service_pb.PurchaseRequest)) {
    throw new Error('Expected argument of type com.qapp.hermes.PurchaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_hermes_PurchaseRequest(buffer_arg) {
  return services_credits_v1_credits_service_pb.PurchaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_hermes_TopupCreditsRequest(arg) {
  if (!(arg instanceof services_credits_v1_credits_service_pb.TopupCreditsRequest)) {
    throw new Error('Expected argument of type com.qapp.hermes.TopupCreditsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_hermes_TopupCreditsRequest(buffer_arg) {
  return services_credits_v1_credits_service_pb.TopupCreditsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CreditServiceService = exports.CreditServiceService = {
  topupCredits: {
    path: '/com.qapp.hermes.CreditService/TopupCredits',
    requestStream: false,
    responseStream: false,
    requestType: services_credits_v1_credits_service_pb.TopupCreditsRequest,
    responseType: services_credits_v1_credits_service_pb.CreditsOperationResponse,
    requestSerialize: serialize_com_qapp_hermes_TopupCreditsRequest,
    requestDeserialize: deserialize_com_qapp_hermes_TopupCreditsRequest,
    responseSerialize: serialize_com_qapp_hermes_CreditsOperationResponse,
    responseDeserialize: deserialize_com_qapp_hermes_CreditsOperationResponse,
  },
  getCredits: {
    path: '/com.qapp.hermes.CreditService/GetCredits',
    requestStream: false,
    responseStream: false,
    requestType: services_credits_v1_credits_service_pb.GetCreditsRequest,
    responseType: services_credits_v1_credits_service_pb.CreditStatusResponse,
    requestSerialize: serialize_com_qapp_hermes_GetCreditsRequest,
    requestDeserialize: deserialize_com_qapp_hermes_GetCreditsRequest,
    responseSerialize: serialize_com_qapp_hermes_CreditStatusResponse,
    responseDeserialize: deserialize_com_qapp_hermes_CreditStatusResponse,
  },
  purchase: {
    path: '/com.qapp.hermes.CreditService/Purchase',
    requestStream: false,
    responseStream: false,
    requestType: services_credits_v1_credits_service_pb.PurchaseRequest,
    responseType: services_credits_v1_credits_service_pb.CreditsOperationResponse,
    requestSerialize: serialize_com_qapp_hermes_PurchaseRequest,
    requestDeserialize: deserialize_com_qapp_hermes_PurchaseRequest,
    responseSerialize: serialize_com_qapp_hermes_CreditsOperationResponse,
    responseDeserialize: deserialize_com_qapp_hermes_CreditsOperationResponse,
  },
};

exports.CreditServiceClient = grpc.makeGenericClientConstructor(CreditServiceService);
