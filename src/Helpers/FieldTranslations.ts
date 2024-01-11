import {TableConfig} from '../Interfaces/ltmObjects';

const fields: {[key: string]: TableConfig } = {
  'virtual': {
    defaultColumns: [
      'name',
      'clientside.bits-in',
      'clientside.bits-out',
      'clientside.cur-conns',
      'clientside.evicted-conns',
      'clientside.max-conns',
      'clientside.pkts-in',
      'clientside.pkts-out',
      'five-min-avg-usage-ratio',
      'five-sec-avg-usage-ratio',
      'status.enabled-state',
      'status.availability-state'
    ],
    columnTranslations: {
      'clientside.bits-in': 'cs.bits-in',
      'clientside.bits-out': 'cs.bits-out',
      'clientside.cur-conns': 'cs.cur-conns',
      'clientside.evicted-conns': 'cs.evicted-conns',
      'clientside.max-conns': 'cs.max-conns',
      'clientside.pkts-in': 'cs.pkts-in',
      'clientside.pkts-out': 'cs.pkts-out',
    }
  },
  'pool': {
    defaultColumns: [
      'name',
      'member-cnt',
      'active-member-cnt',
      'available-member-cnt',
      'cur-sessions',
      'serverside.cur-conns',
      'serverside.evicted-conns',
      'serverside.max-conns',
      'serverside.pkts-in',
      'serverside.pkts-out',
      'five-min-avg-usage-ratio',
      'five-sec-avg-usage-ratio',
      'status.enabled-state',
      'status.availability-state'
    ],
    columnTranslations: {
      'serverside.bits-in': 'ss.bits-in',
      'serverside.bits-out': 'ss.bits-out',
      'serverside.cur-conns': 'ss.cur-conns',
      'serverside.evicted-conns': 'ss.evicted-conns',
      'serverside.max-conns': 'ss.max-conns',
      'serverside.pkts-in': 'ss.pkts-in',
      'serverside.pkts-out': 'ss.pkts-out',
      'status.enabled-state': 'enabled',
      'status.availability-state': 'availability',
    }
  }
}

export default fields;