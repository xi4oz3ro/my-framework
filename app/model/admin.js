'use strict';

module.exports = app => {
  const { STRING, INTEGER, Op } = app.Sequelize;
  // 管理员
  const Admin = app.model.define('admin', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID',
    },
    displayName: {
      type: STRING(32),
      unique: true,
      allowNull: false,
      comment: '显示名称',
    },
    username: {
      type: STRING(32),
      unique: true,
      allowNull: false,
      comment: '登录名',
    },
    password: {
      type: STRING(64),
      allowNull: false,
      defaultValue: '88888888',
      comment: '密码',
    },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '状态',
    },
    roles: {
      type: STRING,
      allowNull: false,
      comment: '角色',
    },
  });

  Admin.getByUsername = async username => {
    return await app.model.Admin.findOne({
      where: {
        username: {
          [Op.eq]: username,
        },
      },
    });
  };

  return Admin;
};
