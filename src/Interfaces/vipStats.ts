interface IRuleStats {
  id: string,
  name: string,
  executions: number,
  aborts: number,
  average: number,
  maximum: number,
  minimum: number,
};

export default IRuleStats;