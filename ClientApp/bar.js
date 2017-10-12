export default {
  type: {
    a: 1,
    b: 2,
  },
  empty(text, description) {
    return {
      value: '',
      text,
      description,
    }
  },
  comparer(q1, q2) {
    return q1.value === q2.value
  },
}
