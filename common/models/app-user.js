'use strict';

const Userdocument = require('../models/user-document');
const Contactinfo = require('../models/contact-info');

module.exports = function(Appuser) {
  Appuser.registerUser = function(data, cb) {
    const userInfo = {
      username: data.username,
      password: data.password,
      email: data.email,
      LastName: data.LastName,
      Name: data.Name,
      IsMilitar: data.IsMilitar,
    };
    const userDocument = {
      Document: data.Document,
      TypeDocumentId: data.TypeDocumentId,
      PlaceExpedition: data.PlaceExpedition,
      DateExpedition: data.DateExpedition,
    };
    const contactInfo = {
      Phone: data.Phone,
      Cellphone: data.Cellphone,
      Address: data.Address,
      City: data.City,
      CountryId: data.CountryId,
      EmergencyName: data.EmergencyName,
      EmergencyPhone: data.EmergencyPhone,
    };

    console.log(data);

    Appuser.create(userInfo, function(err, user) {
      if (err) {
        cb(err);
      } else {
        Userdocument.create(userDocument, function(err, userDocument) {
          if (err) {
            cb(err);
          } else {
            Contactinfo.create(contactInfo, function(err, contactInfo) {
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
        arg: 'Document',
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
        type: 'string',
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
        arg: 'Cellphone',
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
      arg: 'data', type: 'object', root: true,
    },
  });
};
