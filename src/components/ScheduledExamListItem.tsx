import {
  CalendarIcon,
  ClockIcon,
  MinusCircledIcon,
  Pencil1Icon,
  TimerIcon,
} from '@radix-ui/react-icons';
import { useController } from '@rest-hooks/react';
import { Link } from '@tanstack/router';
import { ScheduledExamResource, type ScheduledExam } from 'api/ScheduledExam';
import { DateTime } from 'luxon';
import { useCallback } from 'react';
import {
  scheduledExamsEditRoute,
  scheduledExamsRoute,
} from 'routes/scheduled-exams/routing';
import AdditionalInfo from './AdditionalInfo';
import RichListItem from './RichListItem';

interface Props {
  scheduledExam: ScheduledExam;
}

export default function ScheduledExamListItem({
  scheduledExam: {
    examId,
    courseCode,
    startDateTime,
    duration,
    // instructorId,
    // location,
    // proctorsRequested,
    // proctorsConfirmed,
  },
}: Props) {
  const ctrl = useController();

  const humanDate = DateTime.fromISO(startDateTime).toLocaleString({
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  });

  const humanTime = DateTime.fromISO(startDateTime).toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
  });

  const handleDelete = useCallback(() => {
    void ctrl.fetch(ScheduledExamResource.delete, {
      examId,
    });
  }, [ctrl, examId]);

  const actionButtons = (
    <>
      <Link
        className="flex items-center"
        from={scheduledExamsRoute.fullPath}
        to={scheduledExamsEditRoute.fullPath}
        params={{ id: examId }}
      >
        <Pencil1Icon width="20" height="20" />
      </Link>
      <Link onClick={handleDelete} className="flex items-center">
        <MinusCircledIcon width="20" height="20" />
      </Link>
    </>
  );

  return (
    <RichListItem heading={courseCode} actionElements={actionButtons}>
      <AdditionalInfo Icon={CalendarIcon}>{humanDate}</AdditionalInfo>
      <AdditionalInfo Icon={ClockIcon}>{humanTime}</AdditionalInfo>
      <AdditionalInfo Icon={TimerIcon}>{duration.toHuman()}</AdditionalInfo>
    </RichListItem>
  );
}
