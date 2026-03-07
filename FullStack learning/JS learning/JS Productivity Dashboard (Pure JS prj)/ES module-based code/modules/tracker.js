export class LearningTracker {
  constructor(sessions = []) {
    this.sessions = sessions;
  }

  addSession(topic, minutes) {
    this.sessions.push({
      id: Date.now(),
      topic,
      minutes: Number(minutes),
      date: new Date().toLocaleDateString()
    });
  }

  getTotalMinutes() {
    return this.sessions.reduce((total, s) => total + s.minutes, 0);
  }

  getMinutesByTopic() {
    return this.sessions.reduce((acc, session) => {
      acc[session.topic] = (acc[session.topic] ?? 0) + session.minutes;
      return acc;
    }, {});
  }
}
