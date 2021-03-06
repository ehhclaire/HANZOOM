import { useEffect, useState } from 'react';
import moment from 'moment';
import { ScheduleDetail } from '../../Schedule/ScheduleDetail';
import './UserCalendar.scss';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { Axios } from '../../../core/axios';
import { axios_apis } from '../../../core/axios';

export const UserCalendar = () => {
  const [scheduleList, setScheduleList] = useState(null);
  const [showScheduleDetail, setShowScheduleDetail] = useState(false);
  const [boardNo, setBoardNo] = useState(null);

  const getSchedules = () => {
    const token = sessionStorage.getItem('jwt-token');
    Axios.get(`${axios_apis.plans.findAll}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const scheduleData = res.data;
        const scheduleArr = [];
        for (let i = 0; i < scheduleData.length; i++) {
          var eventColor = '';
          if (i % 3 == 0) eventColor = '#FF7043';
          else if (i % 3 == 1) eventColor = '#FFB74D';
          else if (i % 3 == 2) eventColor = '#FFAB91';
          const date = moment(scheduleData[i].scheduleDatetime).format('YYYY-MM-DD');
          const time = moment(scheduleData[i].scheduleDatetime).format('HH시 m분');
          scheduleArr.push({
            id: scheduleData[i].boardNo,
            title: time,
            date: date,
            color: eventColor,
          });
        }
        setScheduleList(scheduleArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectedEvent = async (info) => {
    const date = info.event.startStr;
    const diaryNo = await info.event.id;
    setBoardNo(diaryNo);
    setShowScheduleDetail(true);
  };

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    if (!showScheduleDetail) getSchedules();
  }, [showScheduleDetail]);

  return (
    <>
      {showScheduleDetail && <ScheduleDetail show={setShowScheduleDetail} boardNo={boardNo} />}
      <div className="calendar">
        <h3>일정</h3>
        <FullCalendar
          locale="ko"
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={scheduleList}
          eventClick={selectedEvent}
        />
      </div>
    </>
  );
};
