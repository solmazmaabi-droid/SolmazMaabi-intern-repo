import reducer, { increment, addByAmount, reset, fetchCount } from "./counterSlice";

describe("counter slice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
      error: null,
    });
  });

  test("increment should increase value by 1", () => {
    const prevState = { value: 0, status: "idle", error: null };
    const nextState = reducer(prevState, increment());
    expect(nextState.value).toBe(1);
  });

  test("addByAmount should add payload to value", () => {
    const prevState = { value: 3, status: "idle", error: null };
    const nextState = reducer(prevState, addByAmount(7));
    expect(nextState.value).toBe(10);
  });

  test("reset should reset to initial state", () => {
    const prevState = { value: 99, status: "failed", error: "boom" };
    const nextState = reducer(prevState, reset());
    expect(nextState).toEqual({ value: 0, status: "idle", error: null });
  });
});

describe("counter async thunk", () => {
  test("fetchCount should handle pending and fulfilled actions in reducer", () => {
    const initial = { value: 0, status: "idle", error: null };

    const pendingState = reducer(initial, { type: fetchCount.pending.type });
    expect(pendingState.status).toBe("loading");

    const fulfilledState = reducer(pendingState, {
      type: fetchCount.fulfilled.type,
      payload: 10,
    });
    expect(fulfilledState.status).toBe("succeeded");
    expect(fulfilledState.value).toBe(10);
  });
});
