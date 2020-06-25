const mockEvents = {

  city: {
    id: 1007700,
    city: 'München',
    lat: 48.14,
    lon: 11.58,
    state: '',
    country: 'de',
    zip: 'meetup3',
    member_count: 1257
  },
  events: [
    {
      created: 1591614589000,
      duration: 7200000,
      id: '271160041',
      name: 'Saturday morning squash in Parkclub Nymphenburg',
      rsvp_limit: 3,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1592036100000,
      local_date: '2020-06-27',
      local_time: '10:15',
      updated: 1591614589000,
      utc_offset: 7200000,
      waitlist_count: 0,
      yes_rsvp_count: 3,
      venue: {
        id: 25978898,
        name: 'Park Club Nymphenburg',
        lat: 48.1603889465332,
        lon: 11.513166427612305,
        repinned: false,
        address_1: 'Stievestraße 15, 80638',
        city: 'München',
        country: 'DE',
        localized_country_name: 'Germany'
      },
      is_online_event: false,
      group: {
        created: 1539632284000,
        name: 'Casual Squash Games',
        id: 30324826,
        join_mode: 'approval',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'Casual-Squash-Games',
        who: 'Members',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/Casual-Squash-Games/events/271160041/',
      description: '<p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p> ',
      visibility: 'public',
      member_pay_fee: false
    },
    {
      created: 1562750055000,
      duration: 10800000,
      id: 'tkqsdrybckblb',
      name: 'Designer-Stammtisch',
      rsvp_limit: 35,
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1594227600000,
      local_date: '2020-07-08',
      local_time: '19:00',
      updated: 1562750055000,
      utc_offset: 7200000,
      waitlist_count: 0,
      yes_rsvp_count: 1,
      venue: {
        id: 26506448,
        name: 'Cafe Zeitgeist',
        lat: 48.15114212036133,
        lon: 11.576687812805176,
        repinned: false,
        address_1: 'Türkenstraße 74',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      is_online_event: false,
      group: {
        created: 1444668795000,
        name: 'Münchner Designer-Stammtisch',
        id: 19020346,
        join_mode: 'approval',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'Designer-Stammtisch',
        who: 'Designer',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/Designer-Stammtisch/events/tkqsdrybckblb/',
      description: '<p>Liebe DesignerInnen,</p> <p>wir treffen uns jeden 2. Mittwoch im Monat um 19:00 Uhr in (neu:) Zeitgeist in der Türkenstraße.</p> <p>Bringt eure Erfolge, neusten Projekte oder auch kleinen Problemchen mit und teilt sie mit anderen Designern bei einem entspannten Abendessen.</p> <p>Wir freuen uns auf neue Designer und alte Bekannte, und auf einen gemütlichen Abend mit Designer-Kaltsch-und-Tratsch.</p> <p>Lieben Gruß, Ben</p> <p>ps: für alle die gerne länger unterwegs sind finden wir auch diesmal bestimmt wieder eine Location.</p> <p>pps: We mostly chat in German, but English will work just find as well.</p> ',
      how_to_find_us: 'Fragt nach dem Designerstammtisch dort! *** Please ask for the Designerstammtisch there!',
      visibility: 'public',
      member_pay_fee: false
    }
  ]
};

export { mockEvents };
