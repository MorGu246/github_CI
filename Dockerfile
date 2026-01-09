#עם איזו טכנולוגיה המערכת עובדת
FROM node:18
#יוצר בעצמו תיקייה בשרת
WORKDIR /app
#מעתיק את כלל מה שאיפה הדוקר פייל לתוך התיקייה שיצרנו
COPY . /app

EXPOSE 80

RUN npm install
#
CMD ["npm","start"]