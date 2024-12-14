import commandLineArgs from 'command-line-args';
import cliOptionsDefinition from './cliOptionsDefinition';
import ExecHandHistory from './src/playedhandhistory/mainCalculation';
import ExecTournamentHistory from './src/tournamentStatistics/mainCalculation';

const disableLoggingForBuildPhase = () => {
  /**
   * HIDE_LOGGING is undefined. It is only set true on building phase when script is tested
   * When script is executed outside building phase HIDE_LOGGING is not set.
   * More information on build.mjs file on project root
   */
  if (process.env.HIDE_LOGGING === 'true') {
    console.log = () => undefined;
  }
};

/**
 * Main entry point for executing statistics scripts
 */
const exec = () => {
  disableLoggingForBuildPhase();

  const cliArgs = commandLineArgs(cliOptionsDefinition);

  console.log('cliArgs', cliArgs);

  try {
    ExecHandHistory();
    ExecTournamentHistory();
  } catch (e) {
    console.error(
      `Error on executing scripts, error message:
      ${e instanceof Error ? e.message : e}`
    );
  }
};

exec();
