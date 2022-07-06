'use strict';

module.exports = function(Userdocument) {
  Userdocument.validatesUniquenessOf('DocumentNumber', {
    message: 'The document already exists',
  });
};
