"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
exports.groupBy = (items, key) => items.reduce((result, item) => (Object.assign(Object.assign({}, result), { [item[key]]: [
        ...(result[item[key]] || []),
        item,
    ] })), {});
//# sourceMappingURL=groupby.js.map