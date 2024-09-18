import conn from "../conn.js";

const Schema = conn.Schema;

const rechargeSchema = new Schema({
  value: {
    type: Schema.Types.Number,
    min: 10,
  },
  status: {
    type: Schema.Types.String,
    enum: ["FINALIZADA", "PENDENTE", "RECUSADA", "CANCELADA"],
    default: "PENDENTE",
  },
});

const walletSchema = new Schema({
  balance: {
    type: Schema.Types.Number,
    default: 0,
    min: 0,
  },
  password: {
    type: Schema.Types.String,
    minLength: 4,
    maxLength: 4,
  },
  recharges: [rechargeSchema],
});

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA=Z]{2,}$/.test(v);
      },
    },
  },
  cpf: {
    type: Schema.Types.String,
    minLength: 11,
    maxLength: 11,
    validate: {
      validator: function (v) {
        return /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
      },
    },
  },
  nickname: {
    type: Schema.Types.String,
    requerid: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      },
    },
  },
  acceptTerms: {
    type: Boolean,
    required: true,
  },
});
