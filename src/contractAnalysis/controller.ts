import {NextFunction, Request, Response} from "express";
import {logger} from "../utils/logger";


class ContractAnalysis {
  public async analyzeContract(req: Request, res: Response, next: NextFunction) {
    try {
      const { contract_address, chain_id } = req.body;

      // TODO: add analysis
      res.status(200).send({});
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export default ContractAnalysis;