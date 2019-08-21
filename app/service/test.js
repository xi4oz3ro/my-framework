'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  constructor(ctx) {
    super(ctx);
    this.config = this.app.config.test;
  }

  async get(id) {
    return { id, name: this.config.key };
  }

  async modelTest() {
    this.logger.debug('================my-framework.service.test.modelTest===[this.ctx.model]>', this.ctx.model);
    this.logger.debug('================my-framework.service.test.modelTest===[this.ctx.model.Admin]>', this.ctx.model.Admin);
    const result = await this.ctx.model.Admin.findOne({
      where: {
        username: 'Admin',
      },
    });
    return result;
  }
}

module.exports = TestService;
