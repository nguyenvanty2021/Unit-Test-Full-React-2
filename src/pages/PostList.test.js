import { render, screen } from "@testing-library/react";
import React from "react";
import PostList from "./PostList";
import { useQuery } from "react-query";
jest.mock("react-query");
describe("PostList", () => {
  it("When isLoading is true then loading text should be displayed", () => {
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });
    render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />);
    const text = screen.queryByTestId("loading-text").innerHTML;
    expect(text).toBe("Loading..");
  });
  //   it("When isLoading is false and data exists then render list of data");
});
