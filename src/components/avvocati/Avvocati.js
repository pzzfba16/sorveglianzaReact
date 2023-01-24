import React from "react";
import { Table } from "react-bootstrap";
import { avvocatiData } from "./avvocatiData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Avvocati extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>ID</td>
            <td>Avvocato</td>
            <td>Foro</td>
            <td>Azione</td>
          </tr>
        </thead>
        <tbody>
          {avvocatiData.map((avvocato) => {
            return (
              <tr>
                <td>{avvocato._id}</td>
                <td>{avvocato.avvocato}</td>
                <td>{avvocato.foro}</td>
                <td>
                  <a href="#">Modifica </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
