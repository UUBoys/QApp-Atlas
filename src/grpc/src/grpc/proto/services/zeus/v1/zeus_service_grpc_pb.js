// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_zeus_v1_zeus_service_pb = require('../../../services/zeus/v1/zeus_service_pb.js');

function serialize_com_qapp_zeus_CreateEstablishmentRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.CreateEstablishmentRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.CreateEstablishmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_CreateEstablishmentRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.CreateEstablishmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_CreateEventRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.CreateEventRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.CreateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_CreateEventRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.CreateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_Establishment(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.Establishment)) {
    throw new Error('Expected argument of type com.qapp.zeus.Establishment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_Establishment(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.Establishment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_Event(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.Event)) {
    throw new Error('Expected argument of type com.qapp.zeus.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_Event(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_GetEstablishmentsRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.GetEstablishmentsRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.GetEstablishmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_GetEstablishmentsRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.GetEstablishmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_GetEstablishmentsResponse(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.GetEstablishmentsResponse)) {
    throw new Error('Expected argument of type com.qapp.zeus.GetEstablishmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_GetEstablishmentsResponse(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.GetEstablishmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_GetEventsRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.GetEventsRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.GetEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_GetEventsRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.GetEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_GetEventsResponse(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.GetEventsResponse)) {
    throw new Error('Expected argument of type com.qapp.zeus.GetEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_GetEventsResponse(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.GetEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_PurchaseTicketRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.PurchaseTicketRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.PurchaseTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_PurchaseTicketRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.PurchaseTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_RefundTicketRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.RefundTicketRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.RefundTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_RefundTicketRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.RefundTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_RefundTicketResponse(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.RefundTicketResponse)) {
    throw new Error('Expected argument of type com.qapp.zeus.RefundTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_RefundTicketResponse(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.RefundTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_SetEstablishmentRoleRequest(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.SetEstablishmentRoleRequest)) {
    throw new Error('Expected argument of type com.qapp.zeus.SetEstablishmentRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_SetEstablishmentRoleRequest(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.SetEstablishmentRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_qapp_zeus_Ticket(arg) {
  if (!(arg instanceof services_zeus_v1_zeus_service_pb.Ticket)) {
    throw new Error('Expected argument of type com.qapp.zeus.Ticket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_qapp_zeus_Ticket(buffer_arg) {
  return services_zeus_v1_zeus_service_pb.Ticket.deserializeBinary(new Uint8Array(buffer_arg));
}


var ZeusService = exports.ZeusService = {
  getEstablishments: {
    path: '/com.qapp.zeus.Zeus/GetEstablishments',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.GetEstablishmentsRequest,
    responseType: services_zeus_v1_zeus_service_pb.GetEstablishmentsResponse,
    requestSerialize: serialize_com_qapp_zeus_GetEstablishmentsRequest,
    requestDeserialize: deserialize_com_qapp_zeus_GetEstablishmentsRequest,
    responseSerialize: serialize_com_qapp_zeus_GetEstablishmentsResponse,
    responseDeserialize: deserialize_com_qapp_zeus_GetEstablishmentsResponse,
  },
  getEvents: {
    path: '/com.qapp.zeus.Zeus/GetEvents',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.GetEventsRequest,
    responseType: services_zeus_v1_zeus_service_pb.GetEventsResponse,
    requestSerialize: serialize_com_qapp_zeus_GetEventsRequest,
    requestDeserialize: deserialize_com_qapp_zeus_GetEventsRequest,
    responseSerialize: serialize_com_qapp_zeus_GetEventsResponse,
    responseDeserialize: deserialize_com_qapp_zeus_GetEventsResponse,
  },
  createEstablishment: {
    path: '/com.qapp.zeus.Zeus/CreateEstablishment',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.CreateEstablishmentRequest,
    responseType: services_zeus_v1_zeus_service_pb.Establishment,
    requestSerialize: serialize_com_qapp_zeus_CreateEstablishmentRequest,
    requestDeserialize: deserialize_com_qapp_zeus_CreateEstablishmentRequest,
    responseSerialize: serialize_com_qapp_zeus_Establishment,
    responseDeserialize: deserialize_com_qapp_zeus_Establishment,
  },
  createEvent: {
    path: '/com.qapp.zeus.Zeus/CreateEvent',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.CreateEventRequest,
    responseType: services_zeus_v1_zeus_service_pb.Event,
    requestSerialize: serialize_com_qapp_zeus_CreateEventRequest,
    requestDeserialize: deserialize_com_qapp_zeus_CreateEventRequest,
    responseSerialize: serialize_com_qapp_zeus_Event,
    responseDeserialize: deserialize_com_qapp_zeus_Event,
  },
  purchaseTicket: {
    path: '/com.qapp.zeus.Zeus/PurchaseTicket',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.PurchaseTicketRequest,
    responseType: services_zeus_v1_zeus_service_pb.Ticket,
    requestSerialize: serialize_com_qapp_zeus_PurchaseTicketRequest,
    requestDeserialize: deserialize_com_qapp_zeus_PurchaseTicketRequest,
    responseSerialize: serialize_com_qapp_zeus_Ticket,
    responseDeserialize: deserialize_com_qapp_zeus_Ticket,
  },
  refundTicket: {
    path: '/com.qapp.zeus.Zeus/RefundTicket',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.RefundTicketRequest,
    responseType: services_zeus_v1_zeus_service_pb.RefundTicketResponse,
    requestSerialize: serialize_com_qapp_zeus_RefundTicketRequest,
    requestDeserialize: deserialize_com_qapp_zeus_RefundTicketRequest,
    responseSerialize: serialize_com_qapp_zeus_RefundTicketResponse,
    responseDeserialize: deserialize_com_qapp_zeus_RefundTicketResponse,
  },
  setEstablishmentRole: {
    path: '/com.qapp.zeus.Zeus/SetEstablishmentRole',
    requestStream: false,
    responseStream: false,
    requestType: services_zeus_v1_zeus_service_pb.SetEstablishmentRoleRequest,
    responseType: services_zeus_v1_zeus_service_pb.SetEstablishmentRoleRequest,
    requestSerialize: serialize_com_qapp_zeus_SetEstablishmentRoleRequest,
    requestDeserialize: deserialize_com_qapp_zeus_SetEstablishmentRoleRequest,
    responseSerialize: serialize_com_qapp_zeus_SetEstablishmentRoleRequest,
    responseDeserialize: deserialize_com_qapp_zeus_SetEstablishmentRoleRequest,
  },
};

exports.ZeusClient = grpc.makeGenericClientConstructor(ZeusService);
