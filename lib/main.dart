import 'package:flutter/material.dart';
import 'package:flutter_amazon_clone/constants/global_variables.dart';
import 'package:flutter_amazon_clone/features/auth/screens/auth_screen.dart';
import 'package:flutter_amazon_clone/router.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          scaffoldBackgroundColor: GlobalVariables.backgroundColor,
          colorScheme: const ColorScheme.light(
            primary: GlobalVariables.secondaryColor,
          ),
        ),
        onGenerateRoute: ((settings) => generateRoute(settings)),
        home: Scaffold(
            appBar: AppBar(
              elevation: 0,
              iconTheme: const IconThemeData(
                color: Colors.black,
              ),
              title: const Text("Amazon Clone"),
              centerTitle: true,
            ),
            body: const AuthScreen()));
  }
}
