// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_auth_v1_auth_service_pb = require('../../../services/auth/v1/auth_service_pb.js');

function serialize_GoogleLoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.GoogleLoginRequest)) {
    throw new Error('Expected argument of type GoogleLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GoogleLoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.GoogleLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterRequest)) {
    throw new Error('Expected argument of type RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterResponse)) {
    throw new Error('Expected argument of type RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  register: {
    path: '/AuthService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.RegisterRequest,
    responseType: services_auth_v1_auth_service_pb.RegisterResponse,
    requestSerialize: serialize_RegisterRequest,
    requestDeserialize: deserialize_RegisterRequest,
    responseSerialize: serialize_RegisterResponse,
    responseDeserialize: deserialize_RegisterResponse,
  },
  login: {
    path: '/AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.LoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_LoginRequest,
    requestDeserialize: deserialize_LoginRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
  googleOAuthLogin: {
    path: '/AuthService/GoogleOAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.GoogleLoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_GoogleLoginRequest,
    requestDeserialize: deserialize_GoogleLoginRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
