'use strict';

/**
 * chain-config router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chain-config.chain-config');
