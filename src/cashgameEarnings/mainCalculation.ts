import * as fs from 'fs';
import { POKERSTARS_FILE_LINEBREAK } from '../../globalConsts';
import * as path from 'path';
import * as TextUtils from './textParserUtils';

const executeCashgameEarnings = () => {
  const lines = fs
    .readFileSync(path.join(__dirname, '../../../test.txt'), 'utf8')
    .split(POKERSTARS_FILE_LINEBREAK);

  const handBlocks = TextUtils.extractHandBlocksFromRaw(lines);

  fs.writeFileSync('output.json', JSON.stringify(handBlocks));
};

export default executeCashgameEarnings;