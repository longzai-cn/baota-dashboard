import { randomPassword } from "./random-password";

describe("randomPassword", () => {
  it("should generate a random password with default length", () => {
    const password = randomPassword();
    expect(password.length).toBe(16);
    expect(/[A-Za-z0-9]/.test(password)).toBe(true);
  });

  it("should generate a random password with specified length", () => {
    const length = 8;
    const password = randomPassword(length);
    expect(password.length).toBe(length);
    expect(/[A-Za-z0-9]/.test(password)).toBe(true);
  });

  it("should generate a random password with special characters", () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const password = randomPassword(12, chars);
    expect(password.length).toBe(12);
  });
});
