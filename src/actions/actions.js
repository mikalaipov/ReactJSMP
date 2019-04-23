import { ACTION} from "./common/common.js";

export const setFilter = (value) => ({
  type: ACTION.FILTERTED,
  value,
});

export const setSort = (typeName) => ({
  type: ACTION.SORTED,
  typeName,
});
