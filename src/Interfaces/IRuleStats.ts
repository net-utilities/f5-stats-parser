interface IRuleStats {
  name: string,
  priority: number,
  executions: number,
  aborts: number,
  average: number,
  maximum: number,
  minimum: number,
};

export default IRuleStats;