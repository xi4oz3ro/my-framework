'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  config.framework = {
    name: 'my-framework',
  };

  config.appStart = {
    recreateDatabase: true,
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'test',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
      timestamps: false,
    },
  };

  return config;
};
