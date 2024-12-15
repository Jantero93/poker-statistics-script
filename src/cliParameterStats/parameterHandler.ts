import { CLI_DEFAULT_DATE_FORMAT } from '../../globalConsts';
import ExecSingleDateHandCount from './singleDateCount';
import moment from 'moment';
import logger from '../utils/logger';

type Params = {
  [key: string]: string;
};

const ExecParam = (params: Params) => {
  const dateParam = params['date'] ?? undefined;

  console.log('dateParam', dateParam);

  if (dateParam !== undefined) {
    const momentDate = moment(dateParam, CLI_DEFAULT_DATE_FORMAT, true);

    if (!momentDate.isValid()) {
      logger(
        `Invalid date format. Expected ${CLI_DEFAULT_DATE_FORMAT}, got ${dateParam}`,
        'red'
      );
    }

    ExecSingleDateHandCount(momentDate.format(CLI_DEFAULT_DATE_FORMAT));
  }
};

export default ExecParam;
