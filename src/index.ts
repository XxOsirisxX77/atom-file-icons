import './css/colors.css';
import './css/fonts.css';
import './css/icons.css';

export type { IconTable, IconMap, IconCache } from './classes/icon-tables';
export { default as IconTables } from './classes/icon-tables';
export { default as Icon } from './classes/icon';

export { db, getIconClass, getIconClassList } from './file-icons';

export type {
  IconColor,
  IconBase,
  IconDbItem,
  IconDb,
  ColorMode,
  ColorModeIndex,
} from './types';
