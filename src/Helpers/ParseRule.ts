function parseRule(rawText: string): {[key: string]: string|number}[] {
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
          trash,
          priority,
          trash3,
          total,
          failures,
          aborts,
          trash4,
          average,
          maximum,
          minimum
        ] = rule.trim()
          .split(/\n/g);


        return {
          name,
          priority: f(priority),
          total: f(total),
          failures: f(failures),
          aborts: f(aborts),
          average: f(average),
          maximum: f(maximum),
          minimum: f(minimum)
        }
  }))
}

export default parseRule;