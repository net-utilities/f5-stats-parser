import {LTMObject} from '../Interfaces/ltmObjects';

function parseData(rawText: string): LTMObject[] {

  const fN = (s:string) => parseInt(s.trim().split(' ')[1])
  const fS = (s:string) => s.trim().split(' ')[1];

  const a =  rawText
    .trim()
    .split(/\n}/)

  const ruleArr = rawText
    .trim()
    .split(/\n}/);

  return (
    ruleArr
      .filter((r,i) => i !== ruleArr.length-1)
      .map((rule, index) => {
        const objArr = rule.trim().split('\n');
        const type = objArr[0].split(' ')[1]
        const ltmObject: LTMObject = {
          id: '',
          name: '',
          type,
        }

        for(let i = 1; i<objArr.length; i++){
          const [k, ...v] = objArr[i].trim().split(/ /)
          ltmObject[k] = /^[0-9]+/.test(v.join()) ? parseInt(v.join()): v.join(' ');
        }
        ltmObject.id = `${ltmObject.name}${ltmObject.type}`;
        return ltmObject;
      })
  )
}

export default parseData;