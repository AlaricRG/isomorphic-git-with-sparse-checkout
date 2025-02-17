// @ts-check
import '../typedefs.js'

import { _sparseCheckout } from '../commands/sparseCheckout.js'

/**
 * Sparse Checkout a branch
 *
 * @param {string} repoUrl Url of the repo
 * @param {string} ref Branch in the repo
 * @param {string} paths Path to checkout
 *
 * @returns {Promise<void>} Resolves successfully when filesystem operations are complete
 *
 */
export async function sparseCheckout(repoUrl, ref, paths) {
  try {
    return await _sparseCheckout(repoUrl, ref, paths)
  } catch (err) {
    err.caller = 'git.sparseCheckout'
    throw err
  }
}
