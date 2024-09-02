'use client';
import React, { useCallback } from 'react';
import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import {
  initialValues,
  notificationDays,
  notificatonIntervals,
  validationSchema,
} from './utils';

import axios from 'axios';

export const EmailNotificationsForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BE_LINK!}/notifications`,
          values
        );

        console.log(response.data, 'data');
      } catch (e) {
        console.error(e);
      }
    },
  });

  const onCancel = useCallback(() => {
    formik.resetForm();
  }, [formik]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-center w-[500px] flex-row gap-4">
      <div className="flex flex-col w-1/2 gap-4">
        {/* Notification Interval */}
        <div className="max-w-md">
          <Label htmlFor="interval" value="Notification Interval" />
          <Select
            id="interval"
            name="notificationInterval"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.notificationInterval}>
            {notificatonIntervals.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          {formik.touched.notificationInterval &&
          formik.errors.notificationInterval ? (
            <div className="text-red-500">
              {formik.errors.notificationInterval}
            </div>
          ) : null}
        </div>

        {/* Weekly Notification Day */}
        <div className="max-w-md">
          <Label htmlFor="weeklyDay" value="Weekly Notification Day" />
          <Select
            id="weeklyDay"
            name="notificationDay"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.notificationDay}>
            {notificationDays.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          {formik.touched.notificationDay && formik.errors.notificationDay ? (
            <div className="text-red-500">{formik.errors.notificationDay}</div>
          ) : null}
        </div>

        {/* Time */}
        <div className="max-w-md">
          <Label htmlFor="time" value="Time" />
          <TextInput
            id="time"
            name="notificationTime"
            type="time"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.notificationTime}
          />
          {formik.touched.notificationTime && formik.errors.notificationTime ? (
            <div className="text-red-500">{formik.errors.notificationTime}</div>
          ) : null}
        </div>

        <div className="flex gap-3 w-full">
          <Button className="bg-black" type="button" onClick={onCancel}>
            Cancel
          </Button>

          <Button className="bg-black" type="submit">
            Create
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-1/2 gap-4">
        {/* Emails */}
        <div className="max-w-md">
          <Label htmlFor="emails" value="Emails" />
          <Textarea
            id="emails"
            name="emailList"
            className="h-[44px]"
            placeholder="Enter emails"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailList}
          />
          {formik.touched.emailList && formik.errors.emailList ? (
            <div className="text-red-500">{formik.errors.emailList}</div>
          ) : null}
        </div>

        {/* Search */}
        <div className="max-w-md">
          <Label htmlFor="search" value="Search" />
          <TextInput
            id="search"
            name="search"
            type="text"
            placeholder="Search"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
          />
          {formik.touched.search && formik.errors.search ? (
            <div className="text-red-500">{formik.errors.search}</div>
          ) : null}
        </div>

        {/* Relevancy Score */}
        <div className="max-w-md">
          <Label htmlFor="score" value="Relevancy Score" />
          <TextInput
            id="score"
            name="score"
            type="text"
            placeholder="Relevancy Score"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.score}
          />
          {formik.touched.score && formik.errors.score ? (
            <div className="text-red-500">{formik.errors.score}</div>
          ) : null}
        </div>
      </div>
    </form>
  );
};
