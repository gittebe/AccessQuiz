import {create} from "zustand";

const useQuizStore = create((set) => ({
  currentQuestion: 0,
  answers: [],
  feedbacks: [],
  quizFinished: false,

  nextQuestion: () =>
    set((state) => {
      if (state.currentQuestion + 1 >= 10) {
        set({ quizFinished: true });
        return { currentQuestion: state.currentQuestion };
      }
      return { currentQuestion: state.currentQuestion + 1 };
    }),

  setAnswer: (answer, correctAnswer, explanation) =>
    set((state) => {
      const newAnswers = [...state.answers];
      const newFeedbacks = [...state.feedbacks];
      newAnswers[state.currentQuestion] = answer;

      const feedback = answer === correctAnswer ? { correct: true, explanation } : { correct: false, explanation };
      newFeedbacks[state.currentQuestion] = feedback;

      return { answers: newAnswers, feedbacks: newFeedbacks };
    }),

  resetQuiz: () => set({ currentQuestion: 0, answers: [], feedbacks: [], quizFinished: false }),
}));

export default useQuizStore