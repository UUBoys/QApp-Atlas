// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_auth_v1_auth_service_pb = require('../../../services/auth/v1/auth_service_pb.js');

function serialize_com_qapp_auth_GoogleLoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.GoogleLoginRequest)) {
    throw new Error('Expected argument of type com.qapp.auth.GoogleLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_auth_GoogleLoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.GoogleLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_auth_LoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type com.qapp.auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_auth_LoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_auth_LoginResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type com.qapp.auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_auth_LoginResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_auth_RegisterRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterRequest)) {
    throw new Error('Expected argument of type com.qapp.auth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_auth_RegisterRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_auth_RegisterResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterResponse)) {
    throw new Error('Expected argument of type com.qapp.auth.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_auth_RegisterResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  register: {
    path: '/com.qapp.auth.AuthService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.RegisterRequest,
    responseType: services_auth_v1_auth_service_pb.RegisterResponse,
    requestSerialize: serialize_com_qapp_auth_RegisterRequest,
    requestDeserialize: deserialize_com_qapp_auth_RegisterRequest,
    responseSerialize: serialize_com_qapp_auth_RegisterResponse,
    responseDeserialize: deserialize_com_qapp_auth_RegisterResponse,
  },
  login: {
    path: '/com.qapp.auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.LoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_com_qapp_auth_LoginRequest,
    requestDeserialize: deserialize_com_qapp_auth_LoginRequest,
    responseSerialize: serialize_com_qapp_auth_LoginResponse,
    responseDeserialize: deserialize_com_qapp_auth_LoginResponse,
  },
  googleOAuthLogin: {
    path: '/com.qapp.auth.AuthService/GoogleOAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.GoogleLoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_com_qapp_auth_GoogleLoginRequest,
    requestDeserialize: deserialize_com_qapp_auth_GoogleLoginRequest,
    responseSerialize: serialize_com_qapp_auth_LoginResponse,
    responseDeserialize: deserialize_com_qapp_auth_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
