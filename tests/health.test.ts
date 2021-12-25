import request from "supertest";
import api from "../src/index";


describe("get /healthcheck", () => {
    it("returns a 200 and status message", async () => {
        const healthcheckRequest = request(api);
        const res = await healthcheckRequest.get("/healthcheck");
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual("We're on the air");
    });
});
