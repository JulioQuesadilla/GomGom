package org.generation.app.security;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.generation.app.entity.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LoginFilter extends  AbstractAuthenticationProcessingFilter {

	protected LoginFilter(String url, AuthenticationManager authenticationManager) {
		super(new AntPathRequestMatcher(url));
		setAuthenticationManager(authenticationManager);
		// TODO Auto-generated constructor stub
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		// Obtenemos el body de la petición en JSON
		InputStream body=request.getInputStream();
		
		//Asumimos que el JSON tiene forma {"username" : "asdf", "password" : "asfasdf"}
		//Realizamos un mapeo a nuestra clase user
		User user = new ObjectMapper().readValue(body, User.class);
		
		//Autenticar usuario
		
		
		return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(
						user.getUsername(),
						user.getPassword(),
						Collections.emptyList())
				);
	}
	
	@Override
	  protected void successfulAuthentication(
	            HttpServletRequest req,
	            HttpServletResponse res, FilterChain chain,
	            Authentication auth) throws IOException, ServletException {		
		
	// si la autentifificación fue correcta, agregamos el token a la respueta
		JwtUtil.addAuthentication(res, auth.getName());
	
	}

}
