'use strict';

const userdocument = require('loopback').getModel('UserDocument');
const contactinfo = require('loopback').getModel('ContactInfo');

module.exports = function(Appuser) {
  Appuser.registerUser = function(
    username,
    password,
    email,
    LastName,
    Name,
    IsMilitar,
    DocumentNumber,
    TypeDocumentId,
    PlaceExpedition,
    DateExpedition,
    Phone,
    CellPhone,
    Address,
    City,
    CountryId,
    EmergencyName,
    EmergencyPhone,
    cb
  ) {
    const userInfo = {
      username,
      password,
      email,
      LastName,
      Name,
      IsMilitar,
    };
    const userDocument = {
      DocumentNumber,
      TypeDocumentId,
      PlaceExpedition,
      DateExpedition,
    };
    const contactInfo = {
      Phone,
      CellPhone,
      Address,
      City,
      CountryId,
      EmergencyName,
      EmergencyPhone,
    };

    Appuser.create(userInfo, function(err, user) {
      if (err) {
        cb(err);
      } else {
        userdocument.create(userDocument, function(err, userDocument) {
          if (err) {
            cb(err);
          } else {
            contactinfo.create(contactInfo, function(err, contactInfo) {
              if (err) {
                cb(err);
              } else {
                user.userDocument = userDocument;
                user.contactInfo = contactInfo;
                cb(null, user);
              }
            });
          }
        });
      }
    });
  };
  Appuser.remoteMethod('registerUser', {
    accepts: [
      {
        arg: 'username',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'password',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'email',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'LastName',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'Name',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'IsMilitar',
        type: 'boolean',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'DocumentNumber',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'TypeDocumentId',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'PlaceExpedition',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'DateExpedition',
        type: 'date',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'Phone',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'CellPhone',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'Address',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'City',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'CountryId',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'EmergencyName',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
      {
        arg: 'EmergencyPhone',
        type: 'string',
        required: true,
        http: {
          source: 'form',
        },
      },
    ],
    http: {
      path: '/registerUser',
    },
    returns: {
      arg: 'data',
      type: 'object',
      root: true,
    },
  });
};
