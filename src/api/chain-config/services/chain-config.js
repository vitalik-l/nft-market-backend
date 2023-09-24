'use strict';

/**
 * chain-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chain-config.chain-config');
