import IRuleStats from '../Interfaces/IRuleStats';

function parseRule(rawText: string): IRuleStats[] {
  const f = (s:string) => {
    const number = parseInt(s.split(/[a-zA-Z] +/)[1].replace('K',''));
    return s.includes('K') ? number * 1000: number
  }

  return (
    rawText
      .trim()
      .split(/Ltm::Rule Event:/g)
      .filter((r, i) => i !== 0)
      .map((rule, index) => {
        let [
          name,
          ,
          priority,
          ,
          executions,
          failures,
          aborts,
          ,
          average,
          maximum,
          minimum
        ] = rule.trim()
          .split(/\n/g);


        return {
          name,
          priority: f(priority),
          executions: f(executions),
          failures: f(failures),
          aborts: f(aborts),
          average: f(average),
          maximum: f(maximum),
          minimum: f(minimum)
        }
  }))
}

export default parseRule;