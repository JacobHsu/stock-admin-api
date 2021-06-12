"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEtfsInfo = void 0;
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));

const { etfs } = require("./data/etfs");
const etfsList = etfs

const getTransactions = (req, res) => {
  const { type, page = 1, limit = 220, sort } = req.query;
  let mockList = etfsList.filter(item => {
    if (type && item.type !== type)
      return false;
    return true;
  });
  const pageList = mockList.filter((_, index) => index < limit * page && index >= limit * (page - 1));
  return res.json({
    code: 0,
    result: {
      total: mockList.length,
      items: pageList
    },
    message: "ok",
    type: "success"
  });
};
exports.getEtfsInfo = getTransactions;
