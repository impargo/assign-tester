import * as core from "@actions/core";
import { getQaOwner } from "./getQaOwner";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput("milliseconds");

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`);

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString());

    const owner = await getQaOwner();
    core.debug(`QA_GITHUB_USERNAME is ${owner}`);
    core.setOutput("QA_GITHUB_USERNAME", owner);
    core.debug(new Date().toTimeString());
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
