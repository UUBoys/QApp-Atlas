// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_auth_v1_auth_service_pb = require('../../../services/auth/v1/auth_service_pb.js');

function serialize_com_qapp_cerberus_GoogleLoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.GoogleLoginRequest)) {
    throw new Error('Expected argument of type com.qapp.cerberus.GoogleLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_cerberus_GoogleLoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.GoogleLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_cerberus_LoginRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type com.qapp.cerberus.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_cerberus_LoginRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_cerberus_LoginResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type com.qapp.cerberus.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_cerberus_LoginResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_cerberus_RegisterRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterRequest)) {
    throw new Error('Expected argument of type com.qapp.cerberus.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_cerberus_RegisterRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_cerberus_RegisterResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RegisterResponse)) {
    throw new Error('Expected argument of type com.qapp.cerberus.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_cerberus_RegisterResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  register: {
    path: '/com.qapp.cerberus.AuthService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.RegisterRequest,
    responseType: services_auth_v1_auth_service_pb.RegisterResponse,
    requestSerialize: serialize_com_qapp_cerberus_RegisterRequest,
    requestDeserialize: deserialize_com_qapp_cerberus_RegisterRequest,
    responseSerialize: serialize_com_qapp_cerberus_RegisterResponse,
    responseDeserialize: deserialize_com_qapp_cerberus_RegisterResponse,
  },
  login: {
    path: '/com.qapp.cerberus.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.LoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_com_qapp_cerberus_LoginRequest,
    requestDeserialize: deserialize_com_qapp_cerberus_LoginRequest,
    responseSerialize: serialize_com_qapp_cerberus_LoginResponse,
    responseDeserialize: deserialize_com_qapp_cerberus_LoginResponse,
  },
  googleOAuthLogin: {
    path: '/com.qapp.cerberus.AuthService/GoogleOAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.GoogleLoginRequest,
    responseType: services_auth_v1_auth_service_pb.LoginResponse,
    requestSerialize: serialize_com_qapp_cerberus_GoogleLoginRequest,
    requestDeserialize: deserialize_com_qapp_cerberus_GoogleLoginRequest,
    responseSerialize: serialize_com_qapp_cerberus_LoginResponse,
    responseDeserialize: deserialize_com_qapp_cerberus_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
