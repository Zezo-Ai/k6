import http from "k6/http";
import { check } from "k6";

export default function () {
  check(http.get("https://quickpizza.grafana.com"), {
    "status is 200": (r) => r.status == 200,
    "protocol is HTTP/2": (r) => r.proto == "HTTP/2.0",
  });
}
