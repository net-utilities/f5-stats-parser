import {LTMObject} from '../Interfaces/interfaces';

function parseData(rawText: string): LTMObject[] {

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
        ltmObject.id = objArr[0];
        return ltmObject;
      })
  )
}

export default parseData;