const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
  {
    historyTopUp: {
      gameName: { type: String, require: [true, "Nama game harus diisi"] },
      category: { type: String, require: [true, "Kategori harus diisi"] },
      coinName: { type: String, require: [true, "Nama Koin harus diisi"] },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah Koin harus diisi"],
      },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, require: [true, "Nama harus diisi"] },
      type: { type: String, require: [true, "Tipe Pembayaran harus diisi"] },
      bankName: { type: String, require: [true, "Nama Bank harus diisi"] },
      noRek: { type: String, require: [true, "Nomor Rekening harus diisi"] },
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      minlength: [3, "Nama harus memiliki setidaknya 3 karakter"],
      maxlength: [255, "Panjang maksimal nama adalah 255 karakter"],
    },
    userAccount: {
      type: String,
      require: [true, "Nama Akun harus diisi"],
      minlength: [3, "Nama harus memiliki setidaknya 3 karakter"],
      maxlength: [255, "Panjang maksimal nama adalah 255 karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "player",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    historyUser: {
      name: { type: String, require: [true, "Nama player harus diisi"] },
      phoneNumber: {
        type: String,
        require: [true, "Nomor Telepon harus diisi"],
        minlength: [9, "Nomor Telepon harus memiliki setidaknya 9 karakter"],
        maxlength: [13, "Panjang maksimal nomor telepon adalah 13 karakter"],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);