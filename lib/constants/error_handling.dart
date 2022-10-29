import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:flutter_amazon_clone/constants/utils.dart';
import 'package:http/http.dart' as http;

void httpErrorHandle({
  required http.Response response,
  required VoidCallback onSucess,
  required BuildContext context,
}) {
  switch (response.statusCode) {
    case 200:
      onSucess();
      break;
    case 400:
      showSnackBar(
        context,
        jsonDecode(response.body)["msg"],
      );
      break;
    case 500:
      showSnackBar(
        context,
        jsonDecode(response.body)["error"],
      );
      break;
    default:
      showSnackBar(
        context,
        response.body,
      );
  }
}
