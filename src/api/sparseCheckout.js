// @ts-check
import '../typedefs.js'

import { _sparseCheckout } from '../commands/sparseCheckout.js'

/**
 * Sparse Checkout a branch
 *
 * @param {string} repoUrl
 * @param {string} ref
 * @param {string} paths
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
